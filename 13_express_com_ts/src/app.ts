// init express
import express, {NextFunction, Request, Response} from 'express';
import { request } from 'http';

const app = express();


// rota com POST
app.use(express.json());


// middleware em todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);


app.get("/", (req,res) => {
    return res.send("Hello Express<3");
});

app.post("/api/product", (req,res) => {
    console.log(req.body);

    return res.send("Produto adicionado!");
});

// rota para todos os verbos

app.all("/api/product/check", (req, res) => {
    // req.method == VERBO HTTP
    if(req.method === "POST") {
        return res.send("Inseriu algum registro");

    } else if(req.method === "GET") {
        return res.send("Leu algum registro");

    } else {
        return res.send("Não podemos realizar esta operação!");
    }
});


// interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces");
});


// enviando json
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.00,
        color: "blue",
        sizes: ["P", "M", "G"]
    });
});


// rputer parameters
app.get("/api/product/:id", (req: Request, res:Response) => {
    console.log(req.params);

    const id = req.params.id;

    if(id === "1") {
        const produto = {
            id: 1,
            name: "Boné",
            price: 10
        };
        
        return res.send(produto);

    } else {
        return res.send("Produto não encontrado");
    }
})

// rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${id}`);
});


// router handler
function getUser(req:Request, res:Response) {
    console.log(`Resgatando o usuário com id: ${req.params.id}`);
    return res.send("O usuário foi encontrado!");
}

app.get("/api/user/:id", getUser);


// middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if(req.params.id === "1") {
        console.log("Pode seguir");
        next();
    } else {
        console.log("Acesso restrito");
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json({msg: "Bem vindo a área administrativa"})
});


// req e res com generics
app.get("/api/user/:id/details/:name", (
    req: Request<{id: string; name: string}>, 
    res: Response<{status: boolean}>
    ) => {
        console.log(`ID: ${req.params.id}`);
        console.log(`Name: ${req.params.name}`);

        return res.json({status: true});
});


// tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        throw new Error("Algo deu errado");

    } catch(e: any) {
        res.status(500).json({msg: e.message});
    }
})

app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionando");
});
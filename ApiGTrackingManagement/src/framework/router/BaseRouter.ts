import { Router } from "express";

export abstract class BaseRouter{
    /**
     * Define a Router
     */
    public Router: Router;
    /**
     * Initial all routers
     */
    protected abstract init(): void;
}

export default BaseRouter;
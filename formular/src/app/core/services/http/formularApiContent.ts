export class ApiUrls {
    public static SERVICE_PRINCIPLE_GET_ALL = "/api/ServicePrincipal/GetAll";
    public static SERVICE_PRINCIPLE_CREATE = "/api/ServicePrincipal/Create";
    public static SERVICE_PRINCIPLE_DELETE = "/api/ServicePrincipal/Delete";
}

export class ServicePrincipleGetAllResponse {
    public SubscriptionId: string = "";
    public ClientId: string = "";
    public TenantId: string = "";
}

export class ServicePrincipleCreateParameter {
    public SubscriptionId: string = "";
    public ClientSecret: string = "";
    public ClientId: string = "";
    public TenantId: string = "";
}
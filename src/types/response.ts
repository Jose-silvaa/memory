export interface SuccessResponse{
    success: true;
    message: string;
    docId: string;
}

export interface ErrorResponse{
    success: false;
    message: string;
    error: string | unknown;
}
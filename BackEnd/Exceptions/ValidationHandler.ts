

interface ValidationResponse {
    Message: string,
    Code: number,
}

function GenerateValidationResponse(params?: ValidationResponse) {

    let response: ValidationResponse = {

        Message: params?.Message ?? "An validation error has ocurred",
        Code: params?.Code ?? 400
    }

    return response;
}


export { ValidationResponse, GenerateValidationResponse }
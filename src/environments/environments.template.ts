export interface AwsCognito {
  Auth: {
    Cognito: {
      userPoolClientId: string;
      userPoolId: string;
    };
  };
}

export interface Environment {
  cognito: AwsCognito;
}

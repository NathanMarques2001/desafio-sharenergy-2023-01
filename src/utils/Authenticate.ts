export function Authenticate(userSent: string, passwordSent: string): boolean {
    if(userSent === "desafiosharenergy" && passwordSent === "sh@r3n3rgy"){
      return true;
    }
    return false;
}
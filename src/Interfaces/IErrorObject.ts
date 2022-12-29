interface IErrorObject {
  status: number;
  statusText?: string;
  message?: string;
  internal: boolean;
  data: string;
}
export default IErrorObject;
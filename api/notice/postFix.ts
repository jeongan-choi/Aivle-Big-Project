import {authFetch} from "@/api/authFetch";
import {backendConfig} from "@/api/apiconfig";

interface RequestDTO {
  title: string;
  content: string;
}
export async function postFix(token: string, setToken: (token: string) => void, id: number, data: RequestDTO) {
  return authFetch(`${backendConfig.serverUrl}/api/introduce/post/${id}/`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }, token, setToken);
}
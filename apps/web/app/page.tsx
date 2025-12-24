 
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  
  return (
    <div>
      {user ? <p>{user.username}</p> : <p>No user found</p>}
    </div>
  );
}

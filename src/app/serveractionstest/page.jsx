import { addPost } from "@/lib/actions";

function ServerActionsTest() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default ServerActionsTest;

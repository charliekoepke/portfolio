import Avatar from "../atoms/Avatar.jsx";
import Button from "../atoms/Button.jsx";
import Textarea from "../atoms/Textarea.jsx";
import { FormActions } from "../molecules/Form.jsx";

export default function ChatPanel({ label = "Comments", comments, fieldId = "comment" }) {
  return (
    <div role="region" aria-label={label}>
      {comments.map((comment) => (
        <article className="comment" key={`${comment.name}-${comment.datetime}`}>
          <Avatar initials={comment.initials} decorative />
          <div>
            <p className="comment-name">
              {comment.name} <time dateTime={comment.datetime}>{comment.date}</time>
            </p>
            <p>{comment.text}</p>
          </div>
        </article>
      ))}
      <Textarea id={fieldId} label="Comment" />
      <FormActions>
        <Button>Add comment</Button>
      </FormActions>
    </div>
  );
}

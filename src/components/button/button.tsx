import ButtonProps from "../../interfaces/button";

export default function Button(props: ButtonProps) {
  return (
    <>
      <button className={props.className} aria-label={props["aria-label"]}>
        {props.content}
      </button>
    </>
  );
}

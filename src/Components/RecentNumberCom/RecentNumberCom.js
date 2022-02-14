export default function RecentNumberCom(props) {
  let v = props.test;

  switch (true) {
    case (v < 11):
      return (
        <div className={`yellow ball`}>{v}</div>
      );
    case (v < 21):
      return (
        <div className={`blue ball`}>{v}</div>
      );
    case (v < 31):
      return (
        <div className={`red ball`}>{v}</div>
      );
    case (v < 41):
      return (
        <div className={`black ball`}>{v}</div>
      );
    case (v < 46):
      return (
        <div className={`green ball`}>{v}</div>
      );
    default:
      break;
  }

}
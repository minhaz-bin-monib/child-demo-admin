import { useParams } from "react-router-dom";

const Build = () => {
  const { bID } = useParams();
  return (
    <div>
      <h1>Build / {bID}</h1>;
      <h2>hello hello this is from build</h2>
    </div>
  )
};

export default Build;

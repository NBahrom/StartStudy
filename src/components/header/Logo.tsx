import { Link } from "react-router-dom";

export default function Logo({className, imgSrc}: {className?: string, imgSrc: string}) {
  return (
        <Link className={className} to="/" title="StartStudy">
            <img className="logo__img" src={imgSrc} width="81" height="44" alt="logo start study" />
        </Link>
  );
}
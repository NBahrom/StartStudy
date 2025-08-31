export default function Logo({className, imgSrc}: {className?: string, imgSrc: string}) {
  return (
        <a className={className} href="#top" title="Start Study">
            <img className="logo__img" src={imgSrc} width="81" height="44" alt="logo start study" />
        </a>
  );
}
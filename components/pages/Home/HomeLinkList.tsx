import styles from './HomeLinkList.module.scss';
import Anchor from '/components/utils/Anchor/Anchor';
import { baseURL } from '/utils/urls';
import { linkListRoutes } from '/utils/utils';

const HomeLinkList = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section {...props}>
      <img src="/img/arrow-tdr.gif" alt="construction" height={64} />
      <span className="h4 dInline">
        <b> LINKS</b>
      </span>

      <ul className={`${styles.linkList} h5 red`}>
        {linkListRoutes.map(
          (name) =>
            name.toUpperCase() != 'HOME' && (
              <li key={name}>
                <Anchor href={`${baseURL}/${name.toLocaleLowerCase()}`}>
                  <img src="/img/sigil.gif" width={34} alt="sigil" />
                  <span>{name.toUpperCase()}</span>
                </Anchor>
              </li>
            )
        )}
      </ul>
    </section>
  );
};

export default HomeLinkList;

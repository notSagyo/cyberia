import s from './Bday.module.scss';
import DraggableShell from '/components/Shell/DraggableShell';
import { ShellProps } from '/components/Shell/Shell';

interface HotaruWindowProps extends ShellProps {
  /* props */
}

const HotaruWindow = ({ ...props }: HotaruWindowProps) => {
  return (
    <div className={s.hotaruWindowWrapper}>
      <DraggableShell
        noPadding
        minimizeable={false}
        className={s.hotaruWindow}
        shellTitle="hotaru_cake.jpg"
        {...props}
      >
        <img
          src="https://i.imgur.com/jFQrYt6.jpg"
          alt="sailor saturn with and cake"
        />
      </DraggableShell>
    </div>
  );
};

export default HotaruWindow;

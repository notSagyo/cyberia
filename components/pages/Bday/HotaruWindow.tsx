import Image from 'next/image';
import s from './Bday.module.scss';
import DraggableShell, {
  DraggableShellProps,
} from '/components/Shell/DraggableShell';

const HotaruWindow = ({ ...props }: DraggableShellProps) => {
  return (
    <div className={s.hotaruWindowWrapper}>
      <DraggableShell
        noPadding
        centered
        minimizeable={false}
        className={s.hotaruWindow}
        shellTitle="hotaru_cake.jpg"
        {...props}
      >
        <Image
          width={540}
          height={410}
          src="https://i.imgur.com/jFQrYt6.jpg"
          alt="sailor saturn with and cake"
        />
      </DraggableShell>
    </div>
  );
};

export default HotaruWindow;

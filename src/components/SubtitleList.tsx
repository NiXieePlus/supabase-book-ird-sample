import { AddSubtitle } from "src/components/AddSubtitle";
import { SubtitleCard } from "src/components/SubtitleCard";
import { Title } from "src/components/TitleList";

export type subtitle = {
  id: number;
  user_id: string;
  title_id: number;
  volume: number;
  isbn: number;
  image_url: string;
  possession: boolean;
};

type Props = {
  subtitles: subtitle[];
  title: Title;
  uuid: string;
  getSubtitleList: VoidFunction;
};

export const SubtitleList = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-2 m-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      <AddSubtitle
        title={props.title}
        uuid={props.uuid}
        getSubtitleList={props.getSubtitleList}
      />
      {props.subtitles.map((subtitle) => {
        return (
          <div key={subtitle.id}>
            <SubtitleCard
              subtitle={subtitle}
              title={props.title}
              uuid={props.uuid}
              getSubtitleList={props.getSubtitleList}
            />
          </div>
        );
      })}
    </div>
  );
};

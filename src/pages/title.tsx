import { Auth, Button, IconCornerDownLeft } from "@supabase/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { EditTitle } from "src/components/EditTitle";
import { subtitle, SubtitleList } from "src/components/SubtitleList";
import type { Title as TitleType } from "src/components/TitleList";
import { getSubtitles } from "src/libs/supabase";

const Title = () => {
  const { user } = Auth.useUser();

  const [subtitles, setSubtitles] = useState<subtitle[]>([]);
  const [title, setTitle] = useState<TitleType>();

  const router = useRouter();

  let { id } = router.query;

  const getSubtitleList = useCallback(async () => {
    if (id) {
      const { title, subtitles } = await getSubtitles(id.toString());
      if (title) {
        setTitle(title);
      } else {
        router.push("/");
      }
      if (subtitles) {
        setSubtitles(subtitles);
      }
    }
  }, [id, router]);

  useEffect(() => {
    if (!id) {
      router.push("/");
    }
    getSubtitleList();
  }, [user, getSubtitleList, id, router]);

  return (
    <div>
      <div className="flex justify-end gap-2 my-2 mr-2">
        {title && (
          <div className="w-24">
            <EditTitle title={title} getSubtitleList={getSubtitleList} />
          </div>
        )}
        <div className="w-24">
          <Link href="/" passHref>
            <Button block size="medium" icon={<IconCornerDownLeft />}>
              Back
            </Button>
          </Link>
        </div>
      </div>
      {title && (
        <>
          <h2 className="pb-4 text-4xl font-bold text-center">{title.title}</h2>
          <p className="pb-4 text-2xl font-semibold text-center">
            {title.author}
          </p>
        </>
      )}
      {title && user && (
        <SubtitleList
          subtitles={subtitles}
          title={title}
          uuid={user.id}
          getSubtitleList={getSubtitleList}
        />
      )}
    </div>
  );
};

export default Title;

"use client";

import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from "./section-layout";

export const PainSection = () => {
  return (
    <SectionLayout
      variant="card"
      size="base"
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
        <Typography variant="h1">I love posting on Threads...</Typography>
        <Typography variant="large">
          But I loose my time going and publishing each days
        </Typography>
        <div className="flex items-start gap-4 max-lg:flex-col">
          <div className="flex-1 rounded-lg bg-red-500/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-red-500">
              😞 Posting without Seen-up
            </Typography>
            <ul className="text-foreground/80 mt-4 ml-4 flex list-disc flex-col gap-2 text-lg">
              <li>Going on Thread every day to post</li>
              <li>Be distracted when I go on the app</li>
              <li>Losing track of my post</li>
              <li>Incosistent</li>
            </ul>
          </div>
          <div className="flex-1 rounded-lg bg-green-500/20 p-4 lg:p-6">
            <Typography variant="h3" className="text-green-500">
              😎 Posting WITH Seen-up
            </Typography>
            <ul className="text-foreground/80 mt-4 ml-4 flex list-disc flex-col gap-2 text-lg">
              <li>Schedule your post on the Seen-up UI</li>
              <li>Avoiding opening the app every day</li>
              <li>See excatly what you have scheduled</li>
              <li>Be consistent</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

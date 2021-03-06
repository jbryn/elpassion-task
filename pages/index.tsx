import type { NextPage } from "next";
import Head from "next/head";
import Post from "../components/Post";
import Podcast from "../components/Podcast";
import MoreArticles from "../components/MoreArticles";
import { VStack } from "@chakra-ui/react";

const titles = {
  post1: `Poprzednia dekada nalezala do Drake'a. Jak Kanadyjczyk wplynal na muzyke popularna?`,
  podcast1: `Rozmowy: Wojewódzki & Kędzierski`,
};

const subtitles = {
  podcast1: `Bodnar: Jakim samochodem jeździ rzecznik`,
};

const authors = {
  author1: `Piotr Żelazny`,
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>newonce_task_JB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        direction="column"
        alignItems="center"
        marginY="30px"
        spacing="20px"
      >
        <Post
          imageUrl="/rihanna.svg"
          tagName="HIP-HOP"
          title={titles.post1}
          author={authors.author1}
          createdAt={"1 godz. temu"}
          hasBottomGallery={false}
        />
        <Podcast
          title={titles.podcast1}
          subtitle={subtitles.podcast1}
          coverUrl="/rudzki_ras.svg"
        />
        <Post
          imageUrl="/coachella.svg"
          tagName="HIP-HOP"
          title={titles.post1}
          author={authors.author1}
          createdAt={"1 godz. temu"}
          hasBottomGallery={false}
        />
        <Post
          imageUrl="/reebok.svg"
          tagName="HIP-HOP"
          title={titles.post1}
          author={authors.author1}
          createdAt={"1 godz. temu"}
          hasBottomGallery={false}
        />
        <Podcast
          title={titles.podcast1}
          subtitle={subtitles.podcast1}
          coverUrl="/bolesne_poranki.svg"
        />
        <Post
          imageUrl="/coachella.svg"
          tagName="HIP-HOP"
          title={titles.post1}
          author={authors.author1}
          createdAt={"1 godz. temu"}
          hasBottomGallery={true}
        />
        <Podcast
          title={titles.podcast1}
          subtitle={subtitles.podcast1}
          coverUrl="/bolesne_poranki.svg"
        />
        <MoreArticles />
      </VStack>
    </div>
  );
};

export default Home;

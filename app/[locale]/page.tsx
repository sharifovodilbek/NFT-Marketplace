import Category from "@/modules/Category";
import Collections from "@/modules/Collections";
import Creators from "@/modules/Creators";
import Hero from "@/modules/Hero";
import Join from "@/modules/Join";
import Learn from "@/modules/Learn";
import MagicMushrooms from "@/modules/MagicMushrooms";
import NFTMore from "@/modules/NFT_More";
import { getRequest } from "@/service/getRequest";
import React from "react";

export default async function Home() {
  const auctions = await getRequest("/auctions");
  const auctionsResults = await getRequest("/auction-results");
  const artists = await getRequest("/user?role=ARTIST");
  const collections = await getRequest("/collections?limit=3");
  const categories = await getRequest("/categories");
  const nft = await getRequest("/nfts?limit=3");
  return (
    <>
      <Hero actions={auctions} artists={artists} actionResults={auctionsResults} />
      <Collections collection={collections} />
      <Creators artists={artists} />
      <Category categories={categories}/>
      <NFTMore nft={nft}/>
      <MagicMushrooms/>
      <Learn/>
      <Join/>
    </>
  );
}

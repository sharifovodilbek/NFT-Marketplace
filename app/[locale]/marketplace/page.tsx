import MarketplaceContent from "@/modules/Marketplace/MarketplaceContent"
import { getRequestServer } from "@/service/getRequest"

export default async function MarketplaceLayout() {
    const nft = await getRequestServer("/nfts")
    const collections = await getRequestServer("/collections")

    return <MarketplaceContent nftList={nft.data} collectionsList={collections.data} />
}
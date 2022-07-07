import Heading from "components/Heading/Heading";
import TabMarket from "./TabMarket/TabMarket";

const PageVoting = () => {
  return (
    <div className="container">
      <Heading
        className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
        fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
        isCenter
        desc=""
      >
      NFT Listing
      </Heading>

      <TabMarket />
    </div>
  );
};

export default PageVoting;

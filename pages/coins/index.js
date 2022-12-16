import Axios from "axios";
import Image from 'next/image'

const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.coins.map((coin, index) => {
        return (
          <div key={index}>
            <h1> {coin.name}</h1>
            <Image
              src={coin.icon}
              alt='price'
              width={100}
              height={100}
            />
            <p> {coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};
//getStaticProps: ビルド時にページが作られるので、リアルタイム向けではない
//getServerSideProps
export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;
import { View, Button } from "@tarojs/components";
import useStore from "./counter";

export default function Index() {
  const bears = useStore((state: any) => state.bears);
  const increasePopulation = useStore((state: any) => state.increasePopulation);

  const getP = (e) => {
    console.log(e);
  };
  return (
    <View>
      <Button onClick={increasePopulation}>{bears}</Button>
      <Button open-type="getPhoneNumber" onGetPhoneNumber={getP}>
        getPhone
      </Button>
    </View>
  );
}

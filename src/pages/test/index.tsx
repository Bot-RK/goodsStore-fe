
import { View, Text, Button } from "@tarojs/components";
import create from 'zustand'
import useStore from "./counter";



export default function Index () {
  const bears = useStore((state:any) => state.bears)
  const increasePopulation = useStore((state:any) => state.increasePopulation)
  return (
    <View>
      <Button onClick={increasePopulation}>{bears}</Button>
    </View>
  )

}

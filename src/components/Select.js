import { HStack, Select, Button } from "@chakra-ui/react";
export default function Selection() {
  return (
    <HStack>
      <Select placeholder='make'>
        <option value='acura'>Acura</option>
        <option value='alfa-romeo'>Alfa Romeo</option>
        <option value='aston-martin'>Aston Martin</option>
        <option value='audi'>Audi</option>
        <option value='bentley'>Bentley</option>
        <option value='bmw'>BMW</option>
        <option value='buick'>Buick</option>
        <option value='cadillac'>Cadillac</option>
        <option value='chevrolet'>Chevrolet</option>
        <option value='chrysler'>Chrysler</option>
        <option value='dodge'>Dodge</option>
        <option value='ferrari'>Ferrari</option>
        <option value='fiat'>FIAT</option>
        <option value='fisker'>Fisker</option>
        <option value='ford'>Ford</option>
        <option value='genesis'>Genesis</option>
        <option value='gmc'>GMC</option>
        <option value='honda'>Honda</option>
        <option value='hyundai'>Hyundai</option>
        <option value='infiniti'>INFINITI</option>
        <option value='jaguar'>Jaguar</option>
        <option value='jeep'>Jeep</option>
        <option value='kia'>Kia</option>
        <option value='lamborghini'>Lamborghini</option>
        <option value='land-rover'>Land Rover</option>
        <option value='lexus'>Lexus</option>
        <option value='lincoln'>Lincoln</option>
        <option value='lucid'>Lucid</option>
        <option value='maserati'>Maserati</option>
        <option value='mazda'>Mazda</option>
        <option value='mclaren'>McLaren</option>
        <option value='mercedes-benz'>Mercedes-Benz</option>
        <option value='mini'>MINI</option>
        <option value='mitsubishi'>Mitsubishi</option>
        <option value='nissan'>Nissan</option>
        <option value='polestar'>Polestar</option>
        <option value='porsche'>Porsche</option>
        <option value='ram'>Ram</option>
        <option value='rivian'>Rivian</option>
        <option value='rolls-royce'>Rolls-Royce</option>
        <option value='subaru'>Subaru</option>
        <option value='tesla'>Tesla</option>
        <option value='toyota'>Toyota</option>
        <option value='vinfast'>VinFast</option>
        <option value='volkswagen'>Volkswagen</option>
        <option value='volvo'>Volvo</option>
        <optgroup label='Out of Production'>
          <option value='am-general'>AM General</option>
          <option value='daewoo'>Daewoo</option>
          <option value='eagle'>Eagle</option>
          <option value='geo'>Geo</option>
          <option value='hummer'>HUMMER</option>
          <option value='isuzu'>Isuzu</option>
          <option value='karma'>Karma</option>
          <option value='lotus'>Lotus</option>
          <option value='maybach'>Maybach</option>
          <option value='mercury'>Mercury</option>
          <option value='oldsmobile'>Oldsmobile</option>
          <option value='panoz'>Panoz</option>
          <option value='plymouth'>Plymouth</option>
          <option value='pontiac'>Pontiac</option>
          <option value='saab'>Saab</option>
          <option value='saturn'>Saturn</option>
          <option value='scion'>Scion</option>
          <option value='smart'>smart</option>
          <option value='suzuki'>Suzuki</option>;
        </optgroup>
      </Select>
      <Select placeholder='Model'>
        <option>Electrified G80</option>
        <option>Electrified GV700</option>
        <option>G70</option>
        <option>G80</option>
        <option>G90</option>
        <option>GV60</option>
        <option>GV70</option>
        <option>GV80</option>
        <option>GV90</option>
      </Select>
      <Button variant='solid' colorScheme='teal'>
        GO
      </Button>
    </HStack>
  );
}

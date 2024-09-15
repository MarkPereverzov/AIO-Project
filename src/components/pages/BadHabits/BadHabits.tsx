import { Header, Card} from '../../widgets'
import "./BadHabits.css"

export default function BadHabits() {
  return (
    <div className="main-container">
      <Header title=" Какие у меня зависимости?"></Header>

      <div className="CardBoard-BadHabits">
        <Card address="Smoking" image="smoking" title="Курение" text="Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять."></Card>
        <Card address="Alcohol" image="bad-habits" title="Алкоголь" text="Алкоголь является одной из самых распространенных зависимостей в мире, настало время освободиться от него."></Card>
        <Card address="Coffee" image="coffee" title="Кофе" text="Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять."></Card>
        <Card address="Sweet" image="sweet" title="Сладкое" text="Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно."></Card>
        <Card address="Drugs" image="drugs" title="Наркотики" text="Алкоголь является одной из самых распространенных зависимостей в мире, настало время освободиться от него."></Card>
        <Card address="Porno" image="porno" title="Порно" text="Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно."></Card>
      </div>
    </div>
  );
}
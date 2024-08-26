import {Card} from '..'

export default function CardBoardBadHabits() {
    return (
        <div className="CardBoard-BadHabits">
            <Card address="Smoking" image="smoking" title="Курение" text="Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять."></Card>
            <Card address="Alcohol" image="bad-habits" title="Алкоголь" text="Алкоголь является одной из самых распространенных зависимостей в мире, настало время освободиться от него."></Card>
            <Card address="Sweet" image="candy" title="Сладкое" text="Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно."></Card>
        </div>
    );
}
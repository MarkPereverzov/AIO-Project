import {Card, AddCard } from '..'

export default function CardBoardMain() {
    return (
        <div className="CardBoard">
            <Card address="BadHabits" image="bad-habits" title="Какие у меня зависимости?" text="Давай проверим твою выдержку и подсчитаем, сколько денег ты сумел сэкономить."></Card>
            <Card address="Dream" image="dream" title="Что с моим сном?" text="Сон играет важную роль в жизни. Пора выяснить, насколько крепок твой сон."></Card>
            <Card address="Budget" image="budget" title="На что уходит мой бюджет?" text="Считается некрасивым заглядывать в чужой кошелек, но с твоего разрешения мы это все-таки сделаем."></Card>
            <Card address="Nutrion" image="food" title="Чем же я питаюсь?" text="Пришло время обратить внимание на питание, и мы поможем тебе в этом."></Card>
            <Card address="Job" image="job" title="Мне пора на работу?" text="Теперь тебе не нужно беспокоиться о том, что опоздаешь на работу — мы напомним тебе вовремя."></Card>
            <AddCard image="plus" title="Добавить"></AddCard>
        </div>
    );
}
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { GeneratorForm } from "../widgets/GeneratorForm";
import { Container } from "@mui/material";
import { YMInitializer } from "react-yandex-metrika";
const counter = 91394019;
const ymOptions = {
  defer: true,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Генератор UTM меток</title>
        <meta
          name="description"
          content="Генератор UTM-меток поможет создать утм-ссылки для отслеживания рекламной кампании в Яндекс метрике и Гугл analytics.
         Конструктор поможет разметить utm метками ссылки для Директ, Эдвордс, Инстаграм, Фейсбук, inSales, Тильда, Вконтакте, VK, Tilda."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <YMInitializer accounts={[counter]} options={ymOptions} version="2" />
      <main className={styles.main}>
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Онлайн генератор UTM меток c короткими ссылками
          </Typography>
          <Typography gutterBottom>
            Этот инструмент позволяет легко добавлять параметры кампании к
            URL-адресам, чтобы вы могли измерять пользовательские кампании в
            Google Analytics.
          </Typography>

          <GeneratorForm />
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

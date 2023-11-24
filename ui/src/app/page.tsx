import HelloWorld from "@sample/library";
import HomeIcon from "@sample/library/icons";

export default function Home() {
  return (
    <main>
      <HelloWorld name="Bob Bobertson" />

      <HomeIcon size={200} />
    </main>
  );
}

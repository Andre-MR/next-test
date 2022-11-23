export default function Home(props) {
  return <div>{props.date}</div>;
}

export async function getStaticProps(context) {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 60,
  };
}

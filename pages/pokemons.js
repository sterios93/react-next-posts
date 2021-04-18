import Link from 'next/link'

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const json = await res.json();

    return {
        props: {
            todos: json
        }, // will be passed to the page component as props
    }
}

function Pokemons({todos}) {
    return (
        <>
            <div>Pokemons List</div>
            <ul>
                {todos.map(t => (
                    <li key={t.id}>
                        <Link href={{
                            pathname: `/pokemons/${t.id}`,
                            query: { postData: {ala: 'aa'} },
                        }}>
                            <a>{t.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Pokemons
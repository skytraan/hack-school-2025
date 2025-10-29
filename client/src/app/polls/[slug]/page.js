export default function userPage({ params }){
    const slug = params.slug;
    return <h1>This page's slug: {slug}</h1>
}
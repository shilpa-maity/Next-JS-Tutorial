//catch-all-route = > when you need to capture multiple segments your option will be to use a catch all route concept
//in this case we use [...slug] to capture all segments after /catch-all-route
//this will create an array of segments
//example:
// localhost:3000/catch-all-route/1/2/3
//slug = [1,2,3]

export default async function ProductFilter({
    params}:{
    params:Promise<{ slug: string[] }> ; //[]-->end number of segments
}) {
    const { slug } = await params;//slug is an array of segments
    console.log(slug);
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">Product Filter</h1>
        </div>
            
        )
    }


    //output : http://localhost:3000/catch-all-route/1/2/3/8/shilpa
           // (5) ['1', '2', '3', '8', 'shilpa']
                // 0: "1"
                // 1: "2"
                // 2: "3"
                // 3: "8"
                // 4: "shilpa"
                // length: 5
                // [[Prototype]]: Array(0)

export default function Tracker(){
    return(
        <div className="min-h-screen flex flex-col">
            <h1 className="text-3xl font-bold">MY job Applications</h1>
             <table className="w-full border bg-white">
                <thead>
                    <tr>
                        <th className="px-2 py-2">Job Title</th>
                        <th className="px-2 py-2">Company</th>
                        <th className="px-2 py-2">Date Applied</th>
                        <th className="px-2 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-2 py-2">Software Engineer</td>
                        <td className="border px-2 py-2">Company A</td>
                        <td className="border px-2 py-2">2023-01-15</td>
                        <td className="border px-2 py-2">Applied</td>
                    </tr>
                </tbody>
             </table>

        </div>
    )
}
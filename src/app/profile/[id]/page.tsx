export default function userProfilePage({ params }: any) {
  return (
    <div>
      <h1 className="bg-gray-800 rounded m-3 p-4 text-3xl flex items-center justify-center">
        Profile page
      </h1>
      <hr />
      <h1 className="text-3xl p-4">profile of {params.id}</h1>
    </div>
  );
}

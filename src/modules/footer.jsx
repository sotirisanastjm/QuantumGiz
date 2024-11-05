

export const Footer= () =>{
   
    return (
       <footer className="px-6 py-4 bg-blue-black">
        <div className="flex flex-row justify-center">
            <p className="font-medium">Copyright &copy; {new Date().getFullYear()} QuantumGiz </p>
        </div>
       </footer>
    );
}
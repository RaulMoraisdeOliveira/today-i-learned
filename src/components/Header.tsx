interface HeaderProps {
    showForm: boolean;
    onToggleForm: () => void;
};

export default function Header(
    { showForm, onToggleForm }: HeaderProps
) {
    return (
        <>
            <header className="flex justify-between mb-10">
                <div className="flex items-center gap-4">
                    <img 
                        src="https://todayilearned-jonas.netlify.app/logo.png"
                        className="w-17" 
                    />
                    <h1 className="text-[42px] mt-1.5">hoje eu aprendi</h1>
                </div>
                <button
                    onClick={onToggleForm}
                    className="bg-linear-[135deg,#3b82f6,#ef4444,#16a34a,#eab308] text-[20px] btn-show"
                >
                    { showForm ? 'fechar' : 'compartilhar um fato' }
                </button>
            </header>
        </>
    );
};

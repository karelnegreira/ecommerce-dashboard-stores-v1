

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    }, 
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const page: React.FC<CategoryPageProps> = ({ params, searchParams }) => {
  return (
    <div>
        Category
    </div>
  )
}

export default page
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "../../lib/utils";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({title, companions, classNames} :CompanionsListProps) => {
  return (
    <article className="border p-6 rounded-lg shadow-md bg-black w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Table>
        <TableCaption>A list of your recent sessions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Math</TableCell>
            <TableCell>Algebra</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionsList;

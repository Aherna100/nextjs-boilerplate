import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/app/components/ui/dropdownMenu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/app/components/ui/table';
import { SelectRegistro } from '@/lib/registros';

// import { deleteProduct } from './actions';

export function Registro({ registro }: { registro: SelectRegistro }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{registro.nombre}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {/* {product.status} */}
          Pendiente
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {/* {`$${product.price}`} */}
        15000
        </TableCell>
      <TableCell className="hidden md:table-cell">{registro.}</TableCell>
      <TableCell className="hidden md:table-cell">
        {registro.fechaRegistro?.toLocaleDateString("en-US")}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              {/* <form action={deleteProduct}>
                <button type="submit">Delete</button>
              </form> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

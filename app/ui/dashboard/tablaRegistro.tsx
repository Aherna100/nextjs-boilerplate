'use client';

import {
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    Table
  } from '@/app/components/ui/table';

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@/app/components/ui/card';
  
import { SelectRegistro } from '@/lib/registros';
import { Registro } from './registro';
import { useRouter } from 'next/navigation';

export function RegistrosTable({
    registros,
    offset,
    totalRegistros
}: {
    registros: SelectRegistro[]
    offset: number;
    totalRegistros: number;
}) {
    let router = useRouter();
    let registrosPage = 5;

    function prevPage() {
        router.back();
    }

    function nextPage() {
        router.push(`/?offset=${offset}`, { scroll: false });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Registros</CardTitle>
                <CardDescription>
                Encuentra todos los registros obtenidos.
                </CardDescription>
            </CardHeader>

            <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">
                    Total Sales
                </TableHead>
                <TableHead className="hidden md:table-cell">Created at</TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {registros.map((registro) => (
                <Registro key={registro.nombre} registro={registro} />
                ))}
            </TableBody>
            </Table>
            </CardContent>
        </Card>
    );
    
}

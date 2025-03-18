import { getRegistros } from "@/lib/registros";
import { getUsers } from "@/lib/users";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { RegistrosTable } from "../../ui/dashboard/tablaRegistro";
import { Button } from "@/app/components/ui/button";
import { File, PlusCircle } from 'lucide-react';

export default async function ClientesPage(
    props: {
      searchParams: Promise<{ q: string; offset: string }>;
    }
  ) {
    const searchParams = await props.searchParams;
    const search = searchParams.q ?? '';
    const offset = searchParams.offset ?? 0;
    const {registros, newOffset, totalRegistros} = await getRegistros(
        search,
        Number(offset)
    );
    return(
      <Tabs defaultValue="all">
        <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
        </div>
        <TabsContent value="all">
            <RegistrosTable
              registros={registros}
              offset={newOffset ?? 0}
              totalRegistros={totalRegistros}
            />
        </TabsContent>
      </Tabs>
      
    );
}
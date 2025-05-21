import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { githubProfileLink, linkedinProfileLink, whatsappLink } from "@/lib/socialMediaLinks";
export default async function Footer() {

    return (
        <div className="mt-12 min-h-fit h-64 bg-secondary dark:bg-background w-full m-auto p-2  border-1 dark:border-t-white border-muted">
            <div className="p-2 my-1 h-full border-x-1 border-muted h-48 max-w-7xl flex flex-row m-auto md:my-4">
                <div className="md:py-2 text-sm flex flex-col list-none gap-2  my-auto leading-6 mr-auto md:text-base md:leading-12">
                    <li className="border-b-1">Portfólio Desenvolvido por mim, Rean lucas Dev</li>
                    <li className="border-b-1">Todos os direitos autorais reservados</li>
                    <li className="border-b-1">Cópia não comédia</li>
                </div>

                <div className="ml-auto w-62 p-2 flex flex-row">
                    <Accordion type="single" collapsible className="w-full p-2 my-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Linkedin</AccordionTrigger>
                            <AccordionContent>
                                <Link href={linkedinProfileLink}> Linkedin </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Github</AccordionTrigger>
                            <AccordionContent>
                                <Link href={githubProfileLink}> Github </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>WhastApp</AccordionTrigger>
                            <AccordionContent>
                                <Link href={whatsappLink} className="break-keep"> (41) 9 84748437 </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

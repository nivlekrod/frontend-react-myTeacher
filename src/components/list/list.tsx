import { Button } from '@mui/material';
import { Professor } from '../../@types/professor';
import { FormatadorService } from '../../services/FormatadorService';
import { Description, Infomations, ItemList, ListEmpty, ListStyled, Name, Photo, Value } from "./list.style";

interface ListProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListStyled>
                    {props.professores.map(professor => (
                        <ItemList key={professor.id}>
                            <Photo src={professor.photo}></Photo>
                            <Infomations>
                                <Name>{professor.name}</Name>
                                <Value>{FormatadorService.monetary_value(professor.value_hour)} por hora</Value>
                                <Description>{FormatadorService.limitText(professor.description, 200)}</Description>
                                <Button onClick={() => props.onSelect(professor)} sx={{ width: '70%' }}> Marcar Aula com {professor.name} </Button>
                            </Infomations>
                        </ItemList>
                    ))}
                </ListStyled>
            ) : (
                <ListEmpty> Nenhum item encontrado </ListEmpty>
            )}
        </div>
    )
}

export default List
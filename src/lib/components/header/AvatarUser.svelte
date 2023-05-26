<script lang="ts">
    import {Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider} from 'flowbite-svelte';

    export let user : any;
</script>

    <Avatar id="user-drop" src="/images/1.jpg" dot={{color:'green'}} />
    <Dropdown triggeredBy="#user-drop">
      <DropdownHeader>
        <span class="block text-sm"> Bonnie Green </span>
        <span class="block truncate text-sm font-medium"> {user} </span>
      </DropdownHeader>
      <DropdownItem>Editar cuenta</DropdownItem>
      <DropdownItem>Tareas pendientes</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Cerrar sesión</DropdownItem>
    </Dropdown>